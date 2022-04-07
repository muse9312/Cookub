package com.cookub.backend.service;

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
import com.cookub.backend.entity.profilepage.AwardsCareer.AwardsCareerBuilder;
import com.cookub.backend.entity.user.User;
import com.cookub.backend.repository.AwardsCareerRepository;
import com.cookub.backend.repository.CertificationRepository;
import com.cookub.backend.repository.DegreeRepository;
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
    
    // get profile Info 
    public ArrayList<List> profile(Long userId){
        User user = userRepository.findById(userId).get();
        List<Certification> cert = certRepository.findByCertificationUser(user);
        List<AwardsCareer> awd = awdRepository.findBycareerUser(user);
        List<Degree> degree = degreeRepository.findByDegreeUser(user);
        List<WorkCareer> work = workRepository.findByWorkPlaceUser(user);

        ArrayList<List> profile = new ArrayList<List>();
        profile.add(cert);
        profile.add(awd);
        profile.add(degree);
        profile.add(work);

        return profile;

    }


    // update Awd
    public void setAwd(AwardsCareerDto careerDto, Long userId){
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

    // upadate Certification
    public void setCert(CertificationDto certDto, Long userId){
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

    // update Degree 
    public void setDegree(DegreeDto degreeDto, Long userId){
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

    // update WorkCareer 
    public void setWork(WorkCareerDto workDto, Long userId){
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
}
