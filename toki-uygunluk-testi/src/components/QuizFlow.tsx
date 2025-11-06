"use client";

import { useState } from "react";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import QuestionCard from "./QuestionCard";
import ResultScreen from "./ResultScreen";
import { motion, AnimatePresence } from "framer-motion";

interface Answers {
  citizenship: string | null;
  age: string | null;
  category: string | null;
  residence: string | null;
  hasHouse: string | null;
  hasTokiBefore: string | null;
  income: string | null;
  spouse: string | null;
  categorySpecific: string | null;
}

const QUESTIONS = [
  {
    id: "citizenship",
    question: "En az 10 yıldır T.C. vatandaşı mısınız?",
    options: ["Evet", "Hayır"],
  },
  {
    id: "age",
    question: "18 yaşını doldurdunuz mu?",
    options: ["Evet", "Hayır"],
  },
  {
    id: "category",
    question: "Hangi kategoriye başvurmak istiyorsunuz?",
    options: [
      "Şehit Ailesi, Terör, Harp veya Vazife Malulü",
      "Gazi (Kıbrıs, Kore)",
      "En az %40 Engelli Vatandaş",
      "Emekli",
      "3 ve Daha Fazla Çocuklu Aile",
      "Genç (18–30 yaş arası)",
      "Diğer",
    ],
  },
  {
    id: "residence",
    question:
      "Projenin bulunduğu il/ilçe/beldede en az 1 yıldır ikamet ediyor musunuz? (Şehit Aileleri için 3 yıl şartı vardır.)",
    options: ["Evet", "Hayır"],
  },
  {
    id: "hasHouse",
    question:
      "Sizin, eşinizin veya çocuklarınızın adına Türkiye'de tapuda kayıtlı bağımsız konut var mı?",
    options: ["Evet", "Hayır"],
  },
  {
    id: "hasTokiBefore",
    question: "Daha önce TOKİ'den konut veya arsa aldınız mı?",
    options: ["Evet", "Hayır"],
  },
  {
    id: "income",
    question: "Aylık hane halkı toplam net geliriniz (12 ay ortalaması):",
    options: [
      "127.000 TL ve altı (İstanbul için 145.000 TL ve altı)",
      "Daha yüksek",
    ],
  },
  {
    id: "spouse",
    question: "Evliyseniz, eşiniz de aynı şartları sağlıyor mu?",
    options: ["Evet", "Hayır", "Bekarım"],
  },
];

interface Question {
  id: string;
  question: string;
  options: string[];
}

const CATEGORY_SPECIFIC_QUESTIONS: Record<
  string,
  { question: string; options: string[] }
> = {
  "Genç (18–30 yaş arası)": {
    question: "10/11/1995 tarihinden sonra doğmuş musunuz?",
    options: ["Evet", "Hayır"],
  },
  "3 ve Daha Fazla Çocuklu Aile": {
    question: "19/12/2007 tarihinden sonra doğan en az 3 çocuk sahibi misiniz?",
    options: ["Evet", "Hayır"],
  },
  "Şehit Ailesi, Terör, Harp veya Vazife Malulü": {
    question:
      '"Hak Sahipliği" TOKİ/Sosyal Güvenlik Kurumu tarafından onaylanmış mı?',
    options: ["Evet", "Hayır"],
  },
  "Gazi (Kıbrıs, Kore)": {
    question: "1005 Sayılı Kanun kapsamında Kore veya Kıbrıs Gazisi misiniz?",
    options: ["Evet", "Hayır"],
  },
  "En az %40 Engelli Vatandaş": {
    question: "En az %40 engel oranına sahip sağlık kurulu raporunuz var mı?",
    options: ["Evet", "Hayır"],
  },
  Emekli: {
    question: "SGK emeklisi misiniz veya vefat eden emeklinin dul eşi misiniz?",
    options: ["Evet", "Hayır"],
  },
};

export default function QuizFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    citizenship: null,
    age: null,
    category: null,
    residence: null,
    hasHouse: null,
    hasTokiBefore: null,
    income: null,
    spouse: null,
    categorySpecific: null,
  });
  const [showResult, setShowResult] = useState(false);
  const [isEligible, setIsEligible] = useState(false);

  const getTotalSteps = () => {
    const hasCategorySpecific =
      answers.category && CATEGORY_SPECIFIC_QUESTIONS[answers.category];
    return QUESTIONS.length + (hasCategorySpecific ? 1 : 0);
  };

  const totalSteps = getTotalSteps();

  const handleAnswer = (answer: string) => {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) return;

    const newAnswers = { ...answers, [currentQuestion.id]: answer };
    setAnswers(newAnswers);

    // Check for immediate disqualification
    if (shouldDisqualifyImmediately(currentQuestion.id, answer)) {
      setTimeout(() => {
        setIsEligible(false);
        setShowResult(true);
      }, 500);
      return;
    }

    // Auto-advance after a short delay
    setTimeout(() => {
      // Calculate if we need category-specific question
      const needsCategorySpecific =
        newAnswers.category &&
        newAnswers.category !== "Diğer" &&
        CATEGORY_SPECIFIC_QUESTIONS[newAnswers.category];

      const newTotalSteps = QUESTIONS.length + (needsCategorySpecific ? 1 : 0);

      if (currentStep < newTotalSteps - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        checkEligibility(newAnswers);
      }
    }, 500);
  };

  const shouldDisqualifyImmediately = (
    questionId: string,
    answer: string
  ): boolean => {
    switch (questionId) {
      case "citizenship":
        return answer === "Hayır";
      case "age":
        return answer === "Hayır";
      case "residence":
        return answer === "Hayır";
      case "hasHouse":
        return answer === "Evet";
      case "hasTokiBefore":
        return answer === "Evet";
      case "income":
        return answer === "Daha yüksek";
      case "spouse":
        return answer === "Hayır";
      case "categorySpecific":
        return answer === "Hayır";
      default:
        return false;
    }
  };

  const getCurrentQuestion = (): Question | null => {
    // Show category-specific question after all regular questions
    if (
      currentStep === QUESTIONS.length &&
      answers.category &&
      CATEGORY_SPECIFIC_QUESTIONS[answers.category]
    ) {
      return {
        id: "categorySpecific",
        question: CATEGORY_SPECIFIC_QUESTIONS[answers.category].question,
        options: CATEGORY_SPECIFIC_QUESTIONS[answers.category].options,
      };
    }

    // Regular question flow
    if (currentStep < QUESTIONS.length) {
      return QUESTIONS[currentStep];
    }

    return null;
  };

  const checkEligibility = (finalAnswers: Answers) => {
    // Check all basic requirements
    if (
      finalAnswers.citizenship === "Evet" &&
      finalAnswers.age === "Evet" &&
      finalAnswers.residence === "Evet" &&
      finalAnswers.hasHouse === "Hayır" &&
      finalAnswers.hasTokiBefore === "Hayır" &&
      finalAnswers.income ===
        "127.000 TL ve altı (İstanbul için 145.000 TL ve altı)" &&
      (finalAnswers.spouse === "Evet" || finalAnswers.spouse === "Bekarım")
    ) {
      // Check category-specific requirements if applicable
      if (
        finalAnswers.category &&
        CATEGORY_SPECIFIC_QUESTIONS[finalAnswers.category]
      ) {
        if (finalAnswers.categorySpecific === "Evet") {
          setIsEligible(true);
        } else {
          setIsEligible(false);
        }
      } else {
        // For "Diğer" category or categories without specific requirements
        setIsEligible(true);
      }
    } else {
      setIsEligible(false);
    }

    setShowResult(true);
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      checkEligibility(answers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({
      citizenship: null,
      age: null,
      category: null,
      residence: null,
      hasHouse: null,
      hasTokiBefore: null,
      income: null,
      spouse: null,
      categorySpecific: null,
    });
    setShowResult(false);
    setIsEligible(false);
  };

  if (showResult) {
    return <ResultScreen isEligible={isEligible} onRestart={handleRestart} />;
  }

  const currentQuestion = getCurrentQuestion();
  if (!currentQuestion) {
    checkEligibility(answers);
    return null;
  }

  const questionKey = currentQuestion.id as keyof Answers;
  const selectedAnswer = answers[questionKey];

  return (
    <Box sx={{ width: "100%", maxWidth: 900, mx: "auto", px: 2 }}>
      <Stepper activeStep={currentStep} sx={{ mb: 4, mt: 2 }}>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <Step key={index}>
            <StepLabel />
          </Step>
        ))}
      </Stepper>

      <AnimatePresence mode="wait">
        <QuestionCard
          key={currentStep}
          question={currentQuestion.question}
          options={currentQuestion.options}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswer}
          questionNumber={currentStep + 1}
          totalQuestions={totalSteps}
        />
      </AnimatePresence>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", mt: 4, mb: 4 }}
      >
        <Button
          onClick={handleBack}
          disabled={currentStep === 0}
          sx={{
            color: "#005fa3",
            "&:disabled": {
              color: "#ccc",
            },
          }}
        >
          Önceki
        </Button>
        {selectedAnswer && (
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{
              backgroundColor: "#005fa3",
              "&:hover": {
                backgroundColor: "#004a82",
              },
            }}
          >
            {currentStep === totalSteps - 1 ? "Sonuçları Gör" : "Sonraki"}
          </Button>
        )}
      </Box>
    </Box>
  );
}
