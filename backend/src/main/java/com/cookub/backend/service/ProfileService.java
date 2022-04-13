package com.cookub.backend.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import com.cookub.backend.dto.profilepage.AwardsCareerDto;
import com.cookub.backend.dto.profilepage.CertificationDto;
import com.cookub.backend.dto.profilepage.DegreeDto;
import com.cookub.backend.dto.profilepage.WorkCareerDto;
import com.cookub.backend.entity.profilepage.AwardsCareer;
import com.cookub.backend.entity.profilepage.Certification;
import com.cookub.backend.entity.profilepage.Degree;
import com.cookub.backend.entity.profilepage.WorkCareer;
import com.cookub.backend.entity.user.User;

import org.springframework.stereotype.Service;

@Service
@Transactional
public interface ProfileService {

    // get profile info
    User profile(Long userId);

    /////@@@@@@@@@@ Awards Career @@@@@@@@@@/////
    // Post AwardsCareer
    void setAwd(AwardsCareerDto AwdDto, Long userId);
    // Get AwardsCareer
    List<AwardsCareer> getAwd(Long userId);
    // Delete AwardsCareer
    void delAwd(Long awdId);
    // upadate AwardsCareer
    void updateAwd(AwardsCareerDto awdDto);

    /////@@@@@@@@@@ Certification @@@@@@@@@@/////
    // post Certification
    void setCert(CertificationDto certDto, Long userId);
    // Get Certification
    List<Certification> getCert(Long userId);
    // Delete Certification
    void delCert(Long certId);
    // upadate Certification
    void updateCert(CertificationDto certDto);

    /////@@@@@@@@@@ Degree @@@@@@@@@@/////
    // post Degree
    void setDegree(DegreeDto degreeDto, Long userId);
    // Get Degree
    List<Degree> getDegree(Long userId);
    // Delete Degree
    void delDegree(Long degreeId);
    // upadate Degree
    void updateDegree(DegreeDto degreeDto);

    /////@@@@@@@@@@ WorkCareer @@@@@@@@@@/////
    // post WorkCareer
    void setWork(WorkCareerDto workDto, Long userId);
    // Get WorkCareer
    List<WorkCareer> getWork(Long userId);
    // Delete WorkCareer
    void delWork(Long workId);
    // upadate WorkCareer
    void updateWork(WorkCareerDto workDto);

}