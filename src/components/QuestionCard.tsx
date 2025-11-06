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
          borderRadius: { xs: 2, sm: 3 },
          boxShadow:
            "0 10px 40px rgba(0, 95, 163, 0.15), 0 0 0 1px rgba(255, 152, 0, 0.1)",
          maxWidth: 800,
          width: "100%",
          mx: "auto",
          minHeight: { xs: "auto", sm: 500 },
          maxHeight: { xs: "calc(100vh - 200px)", sm: "none" },
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
            p: { xs: 2, sm: 3, md: 4 },
            display: "flex",
            flexDirection: "column",
            flex: 1,
            minHeight: 0,
            overflow: "auto",
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

          {/* Soru alanı - responsive yükseklik */}
          <Box
            sx={{
              minHeight: { xs: "auto", sm: 120 },
              maxHeight: { xs: "none", sm: 120 },
              mb: { xs: 2, sm: 3, md: 4 },
              display: "flex",
              alignItems: "flex-start",
              overflow: { xs: "visible", sm: "auto" },
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
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
              }}
            >
              {question}
            </Typography>
          </Box>

          {/* Cevap alanı - responsive yükseklik */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 1.5, sm: 2 },
              flex: 1,
              minHeight: 0,
              pt: { xs: 1, sm: 2 },
              overflowY: { xs: "visible", sm: "auto" },
              maxHeight: { xs: "none", sm: "calc(100vh - 400px)", md: "none" },
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
                  minHeight: { xs: "auto", sm: 56 },
                  py: { xs: 1.25, sm: 1.5 },
                  px: { xs: 2, sm: 3 },
                  textTransform: "none",
                  fontSize: { xs: "0.875rem", sm: "0.9375rem", md: "1rem" },
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
