'use client';

import { useState } from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import QuizFlow from '@/components/QuizFlow';
import { motion } from 'framer-motion';

export default function Home() {
  const [quizStarted, setQuizStarted] = useState(false);

  if (quizStarted) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #e8f4f8 0%, #f0f8ff 50%, #fff5e6 100%)',
          position: 'relative',
          py: { xs: 2, sm: 3, md: 4 },
          px: { xs: 1, sm: 2 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(0, 95, 163, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255, 152, 0, 0.08) 0%, transparent 50%),
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 35px,
                rgba(0, 95, 163, 0.03) 35px,
                rgba(0, 95, 163, 0.03) 70px
              )
            `,
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 0, sm: 2 } }}>
          <QuizFlow />
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #005fa3 0%, #ff9800 50%, #ff6f00 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 1, sm: 2 },
        py: { xs: 2, sm: 0 },
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 15% 25%, rgba(255, 255, 255, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 85% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 40%),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          `,
          opacity: 0.6,
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderRadius: 4,
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)',
            p: { xs: 4, sm: 6, md: 8 },
            maxWidth: 650,
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #005fa3 0%, #ff9800 50%, #ff6f00 100%)',
            },
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              mb: 3,
              fontWeight: 800,
              background: 'linear-gradient(135deg, #005fa3 0%, #ff9800 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            TOKİ Uygunluk Testi
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: { xs: 3, sm: 4 },
              color: '#666',
              lineHeight: 1.8,
              fontSize: { xs: '1rem', sm: '1.25rem' },
              px: { xs: 1, sm: 0 },
            }}
          >
            500 Bin Sosyal Konut Projesi için başvuru şartlarını sağlayıp
            sağlamadığınızı öğrenmek için teste başlayın.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: { xs: 3, sm: 4 },
              color: '#999',
              fontStyle: 'italic',
              fontSize: { xs: '0.8125rem', sm: '0.875rem' },
              px: { xs: 1, sm: 0 },
            }}
          >
            Bu test sadece bilgilendirme amaçlıdır. Resmî bir başvuru işlemi
            yapılmaz.
          </Typography>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => setQuizStarted(true)}
              sx={{
                py: { xs: 1.5, sm: 2 },
                px: { xs: 4, sm: 6 },
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontWeight: 600,
                background: 'linear-gradient(135deg, #005fa3 0%, #ff9800 100%)',
                boxShadow: '0 8px 25px rgba(0, 95, 163, 0.4), 0 0 0 0 rgba(255, 152, 0, 0.4)',
                borderRadius: 3,
                textTransform: 'none',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  transition: 'left 0.5s',
                },
                '&:hover': {
                  background: 'linear-gradient(135deg, #004a82 0%, #ff6f00 100%)',
                  boxShadow: '0 12px 35px rgba(0, 95, 163, 0.5), 0 0 0 4px rgba(255, 152, 0, 0.2)',
                  '&::before': {
                    left: '100%',
                  },
                },
              }}
            >
              Teste Başla 🏠
            </Button>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
}
