package com.cookub.backend.service;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

@Service
@Transactional
public interface ProfileService {

    // get profile info 


    // update AwardsCareer
    void setAwd();

    // upadate Certification
    void setCert();

    // update Degree 
    void setDegree();

    // update WorkCareer 
    void setCareer();

}
