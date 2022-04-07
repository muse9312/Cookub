package com.cookub.backend.controller;

import java.util.ArrayList;
import java.util.List;

import com.cookub.backend.dto.profilepage.AwardsCareerDto;
import com.cookub.backend.dto.profilepage.CertificationDto;
import com.cookub.backend.dto.profilepage.DegreeDto;
import com.cookub.backend.dto.profilepage.WorkCareerDto;
import com.cookub.backend.service.ProfileService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/profile")
@Transactional
public class ProfileController {

    @Autowired
    ProfileService profileService;

    // get Profile Info
    @GetMapping(value = "/{userId}")
    public ArrayList<List> profile(@PathVariable("userId") Long userId ){
        return profileService.profile(userId);
    }

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
