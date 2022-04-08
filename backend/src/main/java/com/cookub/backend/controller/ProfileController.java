package com.cookub.backend.controller;

import java.util.ArrayList;
import java.util.List;

import com.cookub.backend.dto.profilepage.AwardsCareerDto;
import com.cookub.backend.dto.profilepage.CertificationDto;
import com.cookub.backend.dto.profilepage.DegreeDto;
import com.cookub.backend.dto.profilepage.WorkCareerDto;
import com.cookub.backend.entity.profilepage.AwardsCareer;
import com.cookub.backend.entity.profilepage.Certification;
import com.cookub.backend.entity.profilepage.Degree;
import com.cookub.backend.entity.profilepage.WorkCareer;
import com.cookub.backend.entity.user.User;
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

    // get Profile Info ( useEffect )
    @GetMapping(value = "/{userId}")
    public User profile(@PathVariable("userId") Long userId) {
        return profileService.profile(userId);
    }

    ///// @@@@@@@@@@ Awards Career @@@@@@@@@@/////

    // Post AwardsCareer
    @PostMapping(value = "/awd/post/{userId}")
    public void setAwd(@RequestBody AwardsCareerDto AwdDto, @PathVariable Long userId) {
        profileService.setAwd(AwdDto, userId);
    }

    // Get AwardsCareer
    @GetMapping(value = "/awd/get/{userId}")
    public List<AwardsCareer> getAwd(@PathVariable("userId") Long userId) {
        return profileService.getAwd(userId);
    }

    // update AwardsCareer
    @PostMapping(value = "/awd/update/{awdId}")
    public void updateAwd(@RequestBody AwardsCareerDto awdDto, @PathVariable Long awdId) {
        profileService.updateAwd(awdDto);
    }

    // delete AwardsCareer
    @DeleteMapping(value = "/awd/del/{awdId}")
    public void delAw(@PathVariable("awdId") Long awdId) {
        profileService.delAwd(awdId);
    }

    ///// @@@@@@@@@@ Certification @@@@@@@@@@/////

    // Post Certification
    @PostMapping(value = "/cert/{userId}")
    public void setCert(@RequestBody CertificationDto certDto, @PathVariable Long userId) {
        profileService.setCert(certDto, userId);
    }

    // Get Certification
    @GetMapping(value = "/cert/get/{userId}")
    public List<Certification> getCert(@PathVariable("userId") Long userId) {
        return profileService.getCert(userId);
    }

    // update Certification
    @PostMapping(value = "/cert/update/{certId}")
    public void updateCert(@RequestBody CertificationDto certDto, @PathVariable Long certId) {
        profileService.updateCert(certDto);
    }

    // delete Certification
    @DeleteMapping(value = "/cert/delete/{certId}")
    public void delCert(@PathVariable("certId") Long certId) {
        profileService.delCert(certId);
    }

    ///// @@@@@@@@@@ Degree @@@@@@@@@@/////

    // Post Degree
    @PostMapping(value = "/degree/{userId}")
    public void setDegree(@RequestBody DegreeDto degreeDto, @PathVariable Long userId) {
        profileService.setDegree(degreeDto, userId);
    }

    // Get Degree
    @GetMapping(value = "/degree/get/{userId}")
    public List<Degree> getDegree(@PathVariable("userId") Long userId) {
        return profileService.getDegree(userId);
    }

    // update Degree
    @PostMapping(value = "/degree/update/{degreeId}")
    public void updateDegree(@RequestBody DegreeDto degreeDto, @PathVariable Long certId) {
        profileService.updateDegree(degreeDto);
    }

    // delete Degree
    @DeleteMapping(value = "/degree/delete/{degreeId}")
    public void delDegree(@PathVariable("degreeId") Long degreeId) {
        profileService.delDegree(degreeId);
    }

    ///// @@@@@@@@@@ WorkCareer @@@@@@@@@@/////

    // Post WorkCareer
    @PostMapping(value = "/work/{userId}")
    public void setWork(@RequestBody WorkCareerDto workDto, @PathVariable Long userId) {
        profileService.setWork(workDto, userId);
    }

    // Get WorkCareer
    @GetMapping(value = "/work/get/{userId}")
    public List<WorkCareer> getWork(@PathVariable("userId") Long userId) {
        return profileService.getWork(userId);
    }

    // update WorkCareer
    @PostMapping(value = "/work/work/{workId}")
    public void updateWork(@RequestBody WorkCareerDto workDto, @PathVariable Long workId) {
        profileService.updateWork(workDto);
    }

    // delete WorkCareer
    @DeleteMapping(value = "/work/delete/{degreeId}")
    public void delWork(@PathVariable("degreeId") Long degreeId) {
        profileService.delWork(degreeId);
    }

}