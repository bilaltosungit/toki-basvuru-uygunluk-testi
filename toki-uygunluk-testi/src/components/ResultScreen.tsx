"use client";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Link,
  Divider,
} from "@mui/material";
import {
  CheckCircle,
  Cancel,
  Description,
  Language,
  VerifiedUser,
} from "@mui/icons-material";
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
          boxShadow: isEligible
            ? "0 20px 60px rgba(76, 175, 80, 0.25), 0 0 0 1px rgba(76, 175, 80, 0.1)"
            : "0 20px 60px rgba(244, 67, 54, 0.15), 0 0 0 1px rgba(244, 67, 54, 0.1)",
          maxWidth: 800,
          width: "100%",
          mx: "auto",
          minHeight: 400,
          display: "flex",
          flexDirection: "column",
          background: isEligible
            ? "linear-gradient(135deg, #ffffff 0%, #f1f8f4 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)",
          border: isEligible
            ? "1px solid rgba(76, 175, 80, 0.2)"
            : "1px solid rgba(244, 67, 54, 0.2)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: isEligible
              ? "linear-gradient(90deg, #4caf50 0%, #66bb6a 50%, #81c784 100%)"
              : "linear-gradient(90deg, #f44336 0%, #e57373 50%, #ef5350 100%)",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: -100,
            right: -100,
            width: "300px",
            height: "300px",
            background: isEligible
              ? "radial-gradient(circle, rgba(76, 175, 80, 0.08) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(244, 67, 54, 0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          },
        }}
      >
        <CardContent
          sx={{
            p: 6,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            minHeight: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: 200,
              justifyContent: "center",
            }}
          >
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
          </Box>

          <Button
            variant="contained"
            onClick={onRestart}
            sx={{
              m1: 2,
              py: 1.5,
              px: 2,
              fontSize: "1rem",
              backgroundColor: "#005fa3",
              "&:hover": {
                backgroundColor: "#004a82",
              },
            }}
          >
            Yeniden Dene
          </Button>

          <Divider sx={{ my: 4, width: "100%", maxWidth: 500 }} />

          <Box
            sx={{
              width: "100%",
              maxWidth: 600,
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                mb: 3,
                color: "#55883B",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              Yararlı Bağlantılar
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mb: 1,
              }}
            >
              <Link
                href="https://talep.toki.gov.tr/500binkonut/basvuru_bilgilendirme_formu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  color: "#005fa3",
                  textDecoration: "none",
                  p: 1.5,
                  borderRadius: 2,
                  border: "1px solid rgba(0, 95, 163, 0.2)",
                  backgroundColor: "rgba(0, 95, 163, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(0, 95, 163, 0.1)",
                    borderColor: "#005fa3",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(0, 95, 163, 0.15)",
                  },
                }}
              >
                <Description sx={{ fontSize: 20, color: "#005fa3" }} />
                <Typography
                  variant="body2"
                  sx={{
                    flex: 1,
                    textAlign: "left",
                    fontWeight: 500,
                  }}
                >
                  Detaylı Başvuru Bilgilendirme Formu
                </Typography>
              </Link>

              <Link
                href="https://talep.toki.gov.tr/500binkonut/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  color: "#005fa3",
                  textDecoration: "none",
                  p: 1.5,
                  borderRadius: 2,
                  border: "1px solid rgba(0, 95, 163, 0.2)",
                  backgroundColor: "rgba(0, 95, 163, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(0, 95, 163, 0.1)",
                    borderColor: "#005fa3",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(0, 95, 163, 0.15)",
                  },
                }}
              >
                <Language sx={{ fontSize: 20, color: "#005fa3" }} />
                <Typography
                  variant="body2"
                  sx={{
                    flex: 1,
                    textAlign: "left",
                    fontWeight: 500,
                  }}
                >
                  TOKİ 500 Bin Konut Projesi Resmi Site
                </Typography>
              </Link>

              <Link
                href="https://www.turkiye.gov.tr/toplu-konut-idaresi-baskanligi-toki"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  color: "#005fa3",
                  textDecoration: "none",
                  p: 1.5,
                  borderRadius: 2,
                  border: "1px solid rgba(0, 95, 163, 0.2)",
                  backgroundColor: "rgba(0, 95, 163, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(0, 95, 163, 0.1)",
                    borderColor: "#005fa3",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(0, 95, 163, 0.15)",
                  },
                }}
              >
                <VerifiedUser sx={{ fontSize: 20, color: "#005fa3" }} />
                <Typography
                  variant="body2"
                  sx={{
                    flex: 1,
                    textAlign: "left",
                    fontWeight: 500,
                  }}
                >
                  E-devlet TOKİ İşlemleri
                </Typography>
              </Link>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
