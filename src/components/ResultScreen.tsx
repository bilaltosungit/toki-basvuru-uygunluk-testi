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
  LinkedIn,
  GitHub,
  Email,
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
          borderRadius: { xs: 2, sm: 3 },
          boxShadow: isEligible
            ? "0 20px 60px rgba(76, 175, 80, 0.25), 0 0 0 1px rgba(76, 175, 80, 0.1)"
            : "0 20px 60px rgba(244, 67, 54, 0.15), 0 0 0 1px rgba(244, 67, 54, 0.1)",
          maxWidth: 800,
          width: "100%",
          mx: "auto",
          minHeight: { xs: "auto", sm: 400 },
          maxHeight: { xs: "calc(100vh - 100px)", sm: "none" },
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
            p: { xs: 3, sm: 4, md: 6 },
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            minHeight: 0,
            overflow: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: { xs: "auto", sm: 200 },
              justifyContent: "center",
              mb: { xs: 2, sm: 0 },
            }}
          >
            {isEligible ? (
              <>
                <CheckCircle
                  sx={{
                    fontSize: { xs: 60, sm: 70, md: 80 },
                    color: "#4caf50",
                    mb: { xs: 2, sm: 3 },
                  }}
                />
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    mb: { xs: 1, sm: 2 },
                    fontWeight: 600,
                    color: "#333",
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
                  }}
                >
                  Tebrikler!
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: { xs: 2, sm: 3, md: 4 },
                    color: "#666",
                    lineHeight: 1.6,
                    fontSize: { xs: "1rem", sm: "1.25rem" },
                    px: { xs: 2, sm: 0 },
                  }}
                >
                  TOKİ başvuru şartlarını sağlıyorsunuz.
                </Typography>
              </>
            ) : (
              <>
                <Cancel
                  sx={{
                    fontSize: { xs: 60, sm: 70, md: 80 },
                    color: "#f44336",
                    mb: { xs: 2, sm: 3 },
                  }}
                />
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    mb: { xs: 1, sm: 2 },
                    fontWeight: 600,
                    color: "#333",
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
                  }}
                >
                  Maalesef
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: { xs: 2, sm: 3, md: 4 },
                    color: "#666",
                    lineHeight: 1.6,
                    fontSize: { xs: "1rem", sm: "1.25rem" },
                    px: { xs: 2, sm: 0 },
                  }}
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
              m: { xs: 1, sm: 2 },
              py: { xs: 1.25, sm: 1.5 },
              px: { xs: 2, sm: 3 },
              fontSize: { xs: "0.875rem", sm: "1rem" },
              backgroundColor: "#005fa3",
              "&:hover": {
                backgroundColor: "#004a82",
              },
            }}
          >
            Yeniden Dene
          </Button>

          <Divider sx={{ my: { xs: 2, sm: 3, md: 4 }, width: "100%", maxWidth: 500 }} />

          <Box
            sx={{
              width: "100%",
              maxWidth: 600,
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                mb: { xs: 2, sm: 3 },
                color: "#55883B",
                fontWeight: 600,
                fontSize: { xs: "0.875rem", sm: "0.95rem" },
              }}
            >
              Yararlı Bağlantılar
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1.5, sm: 2 },
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
                  gap: { xs: 1, sm: 1.5 },
                  color: "#005fa3",
                  textDecoration: "none",
                  p: { xs: 1.25, sm: 1.5 },
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
                <Description sx={{ fontSize: { xs: 18, sm: 20 }, color: "#005fa3", flexShrink: 0 }} />
                <Typography
                  variant="body2"
                  sx={{
                    flex: 1,
                    textAlign: "left",
                    fontWeight: 500,
                    fontSize: { xs: "0.8125rem", sm: "0.875rem" },
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
                  gap: { xs: 1, sm: 1.5 },
                  color: "#005fa3",
                  textDecoration: "none",
                  p: { xs: 1.25, sm: 1.5 },
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
                <Language sx={{ fontSize: { xs: 18, sm: 20 }, color: "#005fa3", flexShrink: 0 }} />
                <Typography
                  variant="body2"
                  sx={{
                    flex: 1,
                    textAlign: "left",
                    fontWeight: 500,
                    fontSize: { xs: "0.8125rem", sm: "0.875rem" },
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
                  gap: { xs: 1, sm: 1.5 },
                  color: "#005fa3",
                  textDecoration: "none",
                  p: { xs: 1.25, sm: 1.5 },
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
                <VerifiedUser sx={{ fontSize: { xs: 18, sm: 20 }, color: "#005fa3", flexShrink: 0 }} />
                <Typography
                  variant="body2"
                  sx={{
                    flex: 1,
                    textAlign: "left",
                    fontWeight: 500,
                    fontSize: { xs: "0.8125rem", sm: "0.875rem" },
                  }}
                >
                  E-devlet TOKİ İşlemleri
                </Typography>
              </Link>
            </Box>
          </Box>

          <Divider sx={{ my: { xs: 2, sm: 3 }, width: "100%", maxWidth: 500 }} />

          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              mt: { xs: 1, sm: 2 },
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#999",
                fontSize: { xs: "0.7rem", sm: "0.75rem" },
                display: "block",
                mb: 0.5,
              }}
            >
              Geliştirici: <strong>Bilal Tosun</strong>
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#999",
                fontSize: { xs: "0.7rem", sm: "0.75rem" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 0.5,
                mb: { xs: 1.5, sm: 2 },
              }}
            >
              <span>🚀</span>
              <span>Cursor AI ile geliştirilmiştir</span>
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: { xs: 1.5, sm: 2 },
                mt: { xs: 1, sm: 1.5 },
              }}
            >
              <Link
                href="https://www.linkedin.com/in/bilaltosundev/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0077b5",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#005fa3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <LinkedIn sx={{ fontSize: { xs: 20, sm: 24 } }} />
              </Link>
              <Link
                href="https://github.com/bilaltosungit"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#333",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#005fa3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <GitHub sx={{ fontSize: { xs: 20, sm: 24 } }} />
              </Link>
              <Link
                href="mailto:bilaltosun7@gmail.com"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ea4335",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#005fa3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Email sx={{ fontSize: { xs: 20, sm: 24 } }} />
              </Link>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
