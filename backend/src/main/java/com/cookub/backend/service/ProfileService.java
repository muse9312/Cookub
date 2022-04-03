package com.cookub.backend.service;

import javax.transaction.Transactional;

import com.cookub.backend.dto.profilepage.AwardsCareerDto;
import com.cookub.backend.dto.profilepage.CertificationDto;
import com.cookub.backend.dto.profilepage.DegreeDto;
import com.cookub.backend.dto.profilepage.WorkCareerDto;

import org.springframework.stereotype.Service;

@Service
@Transactional
public interface ProfileService {

    // get profile info 


    // update AwardsCareer
    void setAwd(AwardsCareerDto careerDto, Long userId);

    // upadate Certification
    void setCert(CertificationDto certDto, Long userId);

    // update Degree 
    void setDegree(DegreeDto degreeDto, Long userId);

    // update WorkCareer 
    void setWork(WorkCareerDto workDto, Long userId);

}
