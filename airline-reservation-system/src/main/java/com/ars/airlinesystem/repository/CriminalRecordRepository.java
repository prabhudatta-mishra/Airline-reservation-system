package com.ars.airlinesystem.repository;

import com.ars.airlinesystem.model.CriminalRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CriminalRecordRepository extends JpaRepository<CriminalRecord, Long> {
    List<CriminalRecord> findByFirstNameAndLastName(String firstName, String lastName);
}
