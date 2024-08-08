import React, { useEffect, useState } from "react";
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
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css"; // Importă stilurile AOS
import "./ContactForm.css";

const ContactForm = () => {
  const { t } = useTranslation();

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

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inițializează AOS
  }, []);

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        className="custom-title"
        data-aos="fade-up" // Adaugă animație pentru titlu
      >
        {t("contact_us_for_reservations")}
      </Typography>
      <Grid container spacing={4} alignItems="stretch">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="form-container" data-aos="fade-right">
            <Box p={3}>
              <form onSubmit={handleSubmit}>
                <Typography
                  variant="h6"
                  gutterBottom
                  className="custom-subtitle"
                  data-aos="fade-up"
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
                    data-aos="fade-up" // Adaugă animație pentru buton
                  >
                    {t("send_message")}
                  </Button>
                </Box>
              </form>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            className="info-container"
            data-aos="fade-left" // Adaugă animație pentru informații de contact
          >
            <Box
              p={3}
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              textAlign="center"
            >
              <Typography
                variant="h6"
                gutterBottom
                className="custom-subtitle"
                data-aos="fade-up"
              >
                {t("additional_information")}
              </Typography>
              <Box className="custom-info-item" mb={2} data-aos="fade-up">
                <FaPhone />
                <Typography>+40 123 456 789</Typography>
              </Box>
              <Box className="custom-info-item" mb={2} data-aos="fade-up">
                <FaEnvelope />
                <Typography> contact@kassa.com</Typography>
              </Box>
              <Box className="custom-info-item" mb={2} data-aos="fade-up">
                <FaMapMarkerAlt />
                <Typography>{t("address")}</Typography>
              </Box>
              <Typography
                variant="h6"
                gutterBottom
                className="custom-subtitle"
                data-aos="fade-up"
              >
                {t("follow_us")}
              </Typography>
              <Box
                className="social-icons"
                display="flex"
                justifyContent="center"
                mt={2}
              >
                <FaFacebook className="social-icon" data-aos="fade-up" />
                <FaTwitter className="social-icon" data-aos="fade-up" />
                <FaInstagram className="social-icon" data-aos="fade-up" />
                <FaLinkedin className="social-icon" data-aos="fade-up" />
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactForm;
