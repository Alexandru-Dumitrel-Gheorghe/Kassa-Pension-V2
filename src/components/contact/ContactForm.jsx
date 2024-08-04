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
import { useTranslation } from "react-i18next"; // Import useTranslation
import "./ContactForm.css";

const ContactForm = () => {
  const { t } = useTranslation(); // Initialize useTranslation

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
        {t("contact_us_for_reservations")}
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
                  {t("send_us_a_message")}
                </Typography>
                <TextField
                  fullWidth
                  label={t("full_name")}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label={t("email_address")}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label={t("subject")}
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label={t("message")}
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
                    {t("send_message")}
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
                {t("additional_information")}
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
                <Typography>{t("address")}</Typography>
              </Box>
              <Typography variant="h6" gutterBottom className="custom-subtitle">
                {t("follow_us")}
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
