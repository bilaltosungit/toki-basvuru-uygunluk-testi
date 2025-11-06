"use client";

import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";
import { motion } from "framer-motion";

interface ResultScreenProps {
  isEligible: boolean;
  onRestart: () => void;
}

export default function ResultScreen({
  isEligible,
  onRestart,
}: ResultScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
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
        <CardContent sx={{ p: 6, textAlign: "center" }}>
          {isEligible ? (
            <>
              <CheckCircle
                sx={{
                  fontSize: 80,
                  color: "#4caf50",
                  mb: 3,
                }}
              />
              <Typography
                variant="h4"
                component="h2"
                sx={{ mb: 2, fontWeight: 600, color: "#333" }}
              >
                Tebrikler!
              </Typography>
              <Typography
                variant="h6"
                sx={{ mb: 4, color: "#666", lineHeight: 1.6 }}
              >
                TOKİ başvuru şartlarını sağlıyorsunuz.
              </Typography>
            </>
          ) : (
            <>
              <Cancel
                sx={{
                  fontSize: 80,
                  color: "#f44336",
                  mb: 3,
                }}
              />
              <Typography
                variant="h4"
                component="h2"
                sx={{ mb: 2, fontWeight: 600, color: "#333" }}
              >
                Maalesef
              </Typography>
              <Typography
                variant="h6"
                sx={{ mb: 4, color: "#666", lineHeight: 1.6 }}
              >
                Bu başvuru döneminde TOKİ'ye başvuru yapamıyorsunuz.
              </Typography>
            </>
          )}
          <Button
            variant="contained"
            onClick={onRestart}
            sx={{
              mt: 2,
              py: 1.5,
              px: 4,
              fontSize: "1rem",
              backgroundColor: "#005fa3",
              "&:hover": {
                backgroundColor: "#004a82",
              },
            }}
          >
            Yeniden Dene
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
