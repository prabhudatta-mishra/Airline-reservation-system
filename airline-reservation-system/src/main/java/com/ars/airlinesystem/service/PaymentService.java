package com.ars.airlinesystem.service;

import com.ars.airlinesystem.model.Payment;
import com.ars.airlinesystem.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public Payment processPayment(Payment payment) {
        return paymentRepository.save(payment);
    }
}
