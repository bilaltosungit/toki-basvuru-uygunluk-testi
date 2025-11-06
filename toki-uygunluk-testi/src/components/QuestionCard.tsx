"use client";

import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";

interface QuestionCardProps {
  question: string;
  options: string[];
  selectedAnswer: string | null;
  onAnswerSelect: (answer: string) => void;
  questionNumber: number;
  totalQuestions: number;
}

export default function QuestionCard({
  question,
  options,
  selectedAnswer,
  onAnswerSelect,
  questionNumber,
  totalQuestions,
}: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
          maxWidth: 800,
          width: "100%",
          mx: "auto",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mb: 2, display: "block" }}
          >
            Soru {questionNumber} / {totalQuestions}
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            sx={{ mb: 4, fontWeight: 600, color: "#333" }}
          >
            {question}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswer === option ? "contained" : "outlined"}
                onClick={() => onAnswerSelect(option)}
                sx={{
                  py: 1.5,
                  px: 3,
                  textTransform: "none",
                  fontSize: "1rem",
                  borderRadius: 2,
                  backgroundColor:
                    selectedAnswer === option ? "#005fa3" : "transparent",
                  color: selectedAnswer === option ? "#fff" : "#005fa3",
                  borderColor: "#005fa3",
                  "&:hover": {
                    backgroundColor:
                      selectedAnswer === option ? "#004a82" : "#e3f2fd",
                    borderColor: "#005fa3",
                  },
                }}
              >
                {option}
              </Button>
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
