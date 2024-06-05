import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Box, Card, CardContent, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CartSummary from '../CartSummary/CartSummary';
import PersonalDataForm from '../PersonalDataForm/PersonalDataForm';
import PaymentForm from '../PaymentForm/PaymentForm';
import ProgressBar from '../ProgressBar/ProgressBar';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, updateItemQuantity, removeItemFromCart } = useContext(CartContext);
  const [step, setStep] = useState(1);
  const [personalData, setPersonalData] = useState({
    nombre: '',
    direccion: '',
    email: '',
    telefono: ''
  });
  const [paymentData, setPaymentData] = useState({
    tarjeta: '',
    nombreTitular: '',
    vencimiento: '',
    cvv: ''
  });

  const handleNextStep = () => setStep(step + 1);
  const handlePrevStep = () => setStep(step - 1);
  const handlePersonalDataChange = (e) => setPersonalData({ ...personalData, [e.target.name]: e.target.value });
  const handlePaymentDataChange = (e) => setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  const handleQuantityChange = (itemId, cantidad) => updateItemQuantity(itemId, parseInt(cantidad, 10));

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => total += item.precio * item.cantidad);
    return total.toFixed(2);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" minHeight="100vh" bgcolor="#f5f5f5">
      <ProgressBar step={step} />
      <Card sx={{ width: '90%', maxWidth: 600, margin: 2, padding: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          {step > 1 && (
            <Button onClick={handlePrevStep} startIcon={<FontAwesomeIcon icon={faArrowLeft} />} aria-label="anterior">
              Anterior
            </Button>
          )}
          {step < 3 && (
            <Button onClick={handleNextStep} endIcon={<FontAwesomeIcon icon={faArrowRight} />} aria-label="siguiente">
              Siguiente
            </Button>
          )}
        </Box>
        <CardContent>
          {step === 1 && (
            <CartSummary
              cartItems={cartItems}
              handleQuantityChange={handleQuantityChange}
              removeItemFromCart={removeItemFromCart}
              calculateTotal={calculateTotal}
              handleNextStep={handleNextStep}
            />
          )}
          {step === 2 && (
            <PersonalDataForm
              personalData={personalData}
              handlePersonalDataChange={handlePersonalDataChange}
            />
          )}
          {step === 3 && (
            <PaymentForm
              paymentData={paymentData}
              handlePaymentDataChange={handlePaymentDataChange}
            />
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default CartPage;
