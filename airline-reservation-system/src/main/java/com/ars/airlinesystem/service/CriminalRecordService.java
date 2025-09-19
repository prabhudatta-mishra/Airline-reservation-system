package com.ars.airlinesystem.service;

import com.ars.airlinesystem.model.CriminalRecord;
import com.ars.airlinesystem.repository.CriminalRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CriminalRecordService {

    @Autowired
    private CriminalRecordRepository criminalRecordRepository;

    public boolean isCriminal(String firstName, String lastName) {
        List<CriminalRecord> records = criminalRecordRepository.findByFirstNameAndLastName(firstName, lastName);
        return records != null && !records.isEmpty();
    }

    public CriminalRecord addCriminalRecord(CriminalRecord criminalRecord) {
        return criminalRecordRepository.save(criminalRecord);
    }
}
