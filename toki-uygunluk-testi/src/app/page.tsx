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
          backgroundColor: '#f5f5f5',
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <QuizFlow />
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: 3,
            boxShadow: 3,
            p: 6,
            maxWidth: 600,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              mb: 3,
              fontWeight: 700,
              color: '#005fa3',
            }}
          >
            TOKİ Uygunluk Testi
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              color: '#666',
              lineHeight: 1.8,
            }}
          >
            500 Bin Sosyal Konut Projesi için başvuru şartlarını sağlayıp
            sağlamadığınızı öğrenmek için teste başlayın.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 4,
              color: '#999',
              fontStyle: 'italic',
            }}
          >
            Bu test sadece bilgilendirme amaçlıdır. Resmî bir başvuru işlemi
            yapılmaz.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => setQuizStarted(true)}
            sx={{
              py: 1.5,
              px: 6,
              fontSize: '1.1rem',
              backgroundColor: '#005fa3',
              '&:hover': {
                backgroundColor: '#004a82',
              },
            }}
          >
            Teste Başla
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
}
