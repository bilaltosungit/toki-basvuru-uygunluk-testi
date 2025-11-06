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
      style={{ width: "100%" }}
    >
      <Card
        sx={{
          borderRadius: 3,
          boxShadow:
            "0 10px 40px rgba(0, 95, 163, 0.15), 0 0 0 1px rgba(255, 152, 0, 0.1)",
          maxWidth: 800,
          width: "100%",
          mx: "auto",
          minHeight: 500,
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)",
          border: "1px solid rgba(0, 95, 163, 0.1)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background:
              "linear-gradient(90deg, #005fa3 0%, #ff9800 50%, #ff6f00 100%)",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: -50,
            right: -50,
            width: "200px",
            height: "200px",
            background:
              "radial-gradient(circle, rgba(255, 152, 0, 0.05) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          },
        }}
      >
        <CardContent
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            flex: 1,
            minHeight: 0,
          }}
        >
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              mb: 2,
              display: "block",
              height: 24,
              lineHeight: "24px",
            }}
          >
            Soru {questionNumber} / {totalQuestions}
          </Typography>

          {/* Soru alanı - sabit yükseklik */}
          <Box
            sx={{
              minHeight: 60,
              maxHeight: 120,
              mb: 4,
              display: "flex",
              alignItems: "flex-start",
              overflow: "auto",
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "10px",
                "&:hover": {
                  background: "#555",
                },
              },
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: 600,
                color: "#333",
                lineHeight: 1.5,
                wordBreak: "break-word",
              }}
            >
              {question}
            </Typography>
          </Box>

          {/* Cevap alanı - sabit yükseklik */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              flex: 1,
              minHeight: 0,
              pt: 2,
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "10px",
                "&:hover": {
                  background: "#555",
                },
              },
            }}
          >
            {options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswer === option ? "contained" : "outlined"}
                onClick={() => onAnswerSelect(option)}
                fullWidth
                sx={{
                  minHeight: 56,
                  maxHeight: 56,
                  py: 1.5,
                  px: 3,
                  textTransform: "none",
                  fontSize: "1rem",
                  borderRadius: 2,
                  background:
                    selectedAnswer === option
                      ? "linear-gradient(135deg, #005fa3 0%, #004a82 100%)"
                      : "transparent",
                  backgroundColor:
                    selectedAnswer === option ? "#005fa3" : "transparent",
                  color: selectedAnswer === option ? "#fff" : "#005fa3",
                  borderColor:
                    selectedAnswer === option ? "#005fa3" : "#d0d7de",
                  borderWidth: 2,
                  justifyContent: "flex-start",
                  textAlign: "left",
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  fontWeight: selectedAnswer === option ? 600 : 500,
                  boxShadow:
                    selectedAnswer === option
                      ? "0 2px 8px rgba(0, 95, 163, 0.2)"
                      : "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background:
                      selectedAnswer === option
                        ? "linear-gradient(135deg, #004a82 0%, #003d6b 100%)"
                        : "linear-gradient(135deg, #fff5e6 0%, #ffe0b2 100%)",
                    backgroundColor:
                      selectedAnswer === option ? "#004a82" : "#fff5e6",
                    borderColor:
                      selectedAnswer === option ? "#004a82" : "#ff9800",
                    transform: "translateY(-2px)",
                    boxShadow:
                      selectedAnswer === option
                        ? "0 4px 12px rgba(0, 95, 163, 0.3)"
                        : "0 2px 8px rgba(255, 152, 0, 0.2)",
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
