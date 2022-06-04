package com.cookub.backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.cookub.backend.dto.profilepage.AwardsCareerDto;
import com.cookub.backend.dto.profilepage.CertificationDto;
import com.cookub.backend.dto.profilepage.DegreeDto;
import com.cookub.backend.dto.profilepage.WorkCareerDto;
import com.cookub.backend.entity.profilepage.AwardsCareer;
import com.cookub.backend.entity.profilepage.Certification;
import com.cookub.backend.entity.profilepage.Degree;
import com.cookub.backend.entity.profilepage.WorkCareer;
import com.cookub.backend.entity.profilepage.AwardsCareer.AwardsCareerBuilder;
import com.cookub.backend.entity.recipeE.Recipe;
import com.cookub.backend.entity.user.User;
import com.cookub.backend.repository.AwardsCareerRepository;
import com.cookub.backend.repository.CertificationRepository;
import com.cookub.backend.repository.DegreeRepository;
import com.cookub.backend.repository.RecipeRepository;
import com.cookub.backend.repository.UserRepository;
import com.cookub.backend.repository.WorkCareerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileServiceImpl implements ProfileService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CertificationRepository certRepository;

    @Autowired
    private AwardsCareerRepository awdRepository;

    @Autowired
    private DegreeRepository degreeRepository;

    @Autowired
    private WorkCareerRepository workRepository;

    @Autowired
    private RecipeRepository recipeRepository;

    // get profile Info
    public User profile(Long userId) {
        User user = userRepository.findById(userId).get();
        user.getUrls().clear();

        List<Certification> cert = certRepository.findByCertificationUser(user);
        List<AwardsCareer> awd = awdRepository.findBycareerUser(user);
        List<Degree> degree = degreeRepository.findByDegreeUser(user);
        List<WorkCareer> work = workRepository.findByWorkPlaceUser(user);

        ArrayList<List> profile = new ArrayList<List>();
        profile.add(cert);
        profile.add(awd);
        profile.add(degree);
        profile.add(work);

        return user;
    }

    ///// @@@@@@@@@@ Awards Career @@@@@@@@@@/////
    // Post AwardsCareer
    public void setAwd(AwardsCareerDto careerDto, Long userId) {
        User user = userRepository.findById(userId).get();
        AwardsCareer careerEntity = AwardsCareer.builder()
                .awardsCareerId(careerDto.getAwardsCareerId())
                .getAwdDate(careerDto.getGetAwdDate())
                .compName(careerDto.getCompName())
                .awdName(careerDto.getAwdName())
                .issuedAwd(careerDto.getIssuedAwd())
                .careerUser(user)
                .build();
        awdRepository.save(careerEntity);
    }

    @Override
    public List<AwardsCareer> getAwd(Long userId) {
        User user = userRepository.findById(userId).get();
        List<AwardsCareer> list = awdRepository.findBycareerUser(user);
        return list;
    }

    @Override
    public void delAwd(Long awdId) {
        awdRepository.deleteById(awdId);
    }

    @Override
    public void updateAwd(AwardsCareerDto awdDto) {
        Optional<AwardsCareer> byId = awdRepository.findById(awdDto.getAwardsCareerId());
        if (byId.isPresent()) {
            AwardsCareer awdEntity = byId.get();
            awdEntity.setAwdName(awdDto.getAwdName());
            awdEntity.setCompName(awdDto.getCompName());
            awdEntity.setGetAwdDate(awdDto.getGetAwdDate());
            awdEntity.setIssuedAwd(awdDto.getIssuedAwd());
            awdRepository.save(awdEntity);
        } else {
        }
    }

    ///// @@@@@@@@@@ Certification @@@@@@@@@@/////
    // Post Certification
    public void setCert(CertificationDto certDto, Long userId) {
        User user = userRepository.findById(userId).get();
        Certification certEntity = Certification.builder()
                .certificationId(certDto.getCertificationId())
                .certName(certDto.getCertName())
                .getCertDate(certDto.getGetCertDate())
                .issuedCert(certDto.getIssuedCert())
                .certificationUser(user)
                .build();

        certRepository.save(certEntity);

    }

    @Override
    public List<Certification> getCert(Long userId) {
        User user = userRepository.findById(userId).get();
        List<Certification> list = certRepository.findByCertificationUser(user);
        return list;
    }

    @Override
    public void delCert(Long certId) {
        certRepository.deleteById(certId);
    }

    @Override
    public void updateCert(CertificationDto certDto) {
        Optional<Certification> byId = certRepository.findById(certDto.getCertificationId());
        if (byId.isPresent()) {
            Certification certEntity = byId.get();
            certEntity.setCertName(certDto.getCertName());
            certEntity.setGetCertDate(certDto.getGetCertDate());
            certEntity.setIssuedCert(certDto.getIssuedCert());
            certRepository.save(certEntity);
        } else {
        }

    }

    ///// @@@@@@@@@@ Degree @@@@@@@@@@/////
    // Post Degree
    public void setDegree(DegreeDto degreeDto, Long userId) {
        User user = userRepository.findById(userId).get();
        Degree degreeEntity = Degree.builder()
                .degreeId(degreeDto.getDegreeId())
                .education(degreeDto.getEducation())
                .major(degreeDto.getMajor())
                .graduation(degreeDto.getGraduation())
                .degreeUser(user)
                .build();

        degreeRepository.save(degreeEntity);
    }

    @Override
    public List<Degree> getDegree(Long userId) {
        User user = userRepository.findById(userId).get();
        List<Degree> list = degreeRepository.findByDegreeUser(user);
        return list;
    }

    @Override
    public void delDegree(Long degreeId) {
        degreeRepository.deleteById(degreeId);
    }

    @Override
    public void updateDegree(DegreeDto degreeDto) {
        Optional<Degree> byId = degreeRepository.findById(degreeDto.getDegreeId());
        if (byId.isPresent()) {
            Degree degreeEntity = byId.get();
            degreeEntity.setEducation(degreeDto.getEducation());
            degreeEntity.setGraduation(degreeDto.getGraduation());
            degreeEntity.setMajor(degreeDto.getMajor());
            degreeRepository.save(degreeEntity);
        } else {
        }

    }

    ///// @@@@@@@@@@ WorkCareer @@@@@@@@@@/////
    // Post WorkCareer
    public void setWork(WorkCareerDto workDto, Long userId) {
        User user = userRepository.findById(userId).get();
        WorkCareer workEntity = WorkCareer.builder()
                .workPlaceId(workDto.getWorkPlaceId())
                .compName(workDto.getCompName())
                .location(workDto.getLocation())
                .jobPosition(workDto.getJobPosition())
                .period(workDto.getPeriod())
                .workPlaceUser(user)
                .build();

        workRepository.save(workEntity);
    }

    @Override
    public List<WorkCareer> getWork(Long userId) {
        User user = userRepository.findById(userId).get();
        List<WorkCareer> list = workRepository.findByWorkPlaceUser(user);
        return list;
    }

    @Override
    public void delWork(Long workId) {
        workRepository.deleteById(workId);
    }

    @Override
    public void updateWork(WorkCareerDto workDto) {
        Optional<WorkCareer> byId = workRepository.findById(workDto.getWorkPlaceId());
        if (byId.isPresent()) {
            WorkCareer workEntity = byId.get();
            workEntity.setCompName(workDto.getCompName());
            workEntity.setJobPosition(workDto.getJobPosition());
            workEntity.setLocation(workDto.getLocation());
            workEntity.setPeriod(workDto.getPeriod());
            workRepository.save(workEntity);
        } else {
        }
    }
}
