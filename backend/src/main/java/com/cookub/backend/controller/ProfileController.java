package com.cookub.backend.controller;

import com.cookub.backend.dto.profilepage.AwardsCareerDto;
import com.cookub.backend.dto.profilepage.CertificationDto;
import com.cookub.backend.dto.profilepage.DegreeDto;
import com.cookub.backend.dto.profilepage.WorkCareerDto;
import com.cookub.backend.service.ProfileService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@CrossOrigin
@RestController
@RequestMapping("/profile")
@Transactional
public class ProfileController {

    @Autowired
    ProfileService profileService;

    // update AwardsCareer
    @PostMapping(value = "/awd/{userId}")
    public void setAwd(@RequestBody AwardsCareerDto AwdDto, @PathVariable Long userId){
        profileService.setAwd(AwdDto, userId);
    }

    // upadate Certification
    @PostMapping(value = "/cert/{userId}")
    public void setCert(@RequestBody CertificationDto certDto, @PathVariable Long userId){
        profileService.setCert(certDto, userId);
    }

    // update Degree 
    @PostMapping(value = "/degree/{userId}")
    public void setDegree(@RequestBody DegreeDto degreeDto, @PathVariable Long userId){
        profileService.setDegree(degreeDto, userId);
    }

    // update WorkCareer 
    @PostMapping(value = "/work/{userId}")
    public void setWork(@RequestBody WorkCareerDto workDto, @PathVariable Long userId){
        profileService.setWork(workDto, userId);
    }
    
}
