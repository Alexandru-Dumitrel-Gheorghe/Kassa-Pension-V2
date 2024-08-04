import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        className="custom-title"
      >
        Pentru Rezervări, Contactați-ne
      </Typography>
      <Grid container spacing={4} alignItems="stretch">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="form-container">
            <Box p={3}>
              <form onSubmit={handleSubmit}>
                <Typography
                  variant="h6"
                  gutterBottom
                  className="custom-subtitle"
                >
                  Trimite-ne un mesaj
                </Typography>
                <TextField
                  fullWidth
                  label="Nume complet"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Adresa de email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Subiect"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Mesaj"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  multiline
                  rows={4}
                  required
                />
                <Box textAlign="center" mt={2}>
                  <Button
                    variant="contained"
                    type="submit"
                    className="custom-button"
                  >
                    Trimite Mesajul
                  </Button>
                </Box>
              </form>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="info-container">
            <Box
              p={3}
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              textAlign="center"
            >
              <Typography variant="h6" gutterBottom className="custom-subtitle">
                Informatii Suplimentare
              </Typography>
              <Box className="custom-info-item" mb={2}>
                <FaPhone />
                <Typography>+40 123 456 789</Typography>
              </Box>
              <Box className="custom-info-item" mb={2}>
                <FaEnvelope />
                <Typography> contact@kassa.com</Typography>
              </Box>
              <Box className="custom-info-item" mb={2}>
                <FaMapMarkerAlt />
                <Typography>Strada Valea Porții 213, Bran, România</Typography>
              </Box>
              <Typography variant="h6" gutterBottom className="custom-subtitle">
                Urmareste-ne
              </Typography>
              <Box
                className="social-icons"
                display="flex"
                justifyContent="center"
                mt={2}
              >
                <FaFacebook className="social-icon" />
                <FaTwitter className="social-icon" />
                <FaInstagram className="social-icon" />
                <FaLinkedin className="social-icon" />
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactForm;
