package com.cookub.backend.service;

import java.util.ArrayList;
import java.util.List;

import com.cookub.backend.entity.profilepage.AwardsCareer;
import com.cookub.backend.entity.profilepage.Certification;
import com.cookub.backend.entity.profilepage.Degree;
import com.cookub.backend.entity.profilepage.WorkCareer;
import com.cookub.backend.entity.user.User;
import com.cookub.backend.repository.AwardsCareerRepository;
import com.cookub.backend.repository.CertificationRepository;
import com.cookub.backend.repository.DegreeRepository;
import com.cookub.backend.repository.UserRepository;
import com.cookub.backend.repository.WorkCareerRepository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ProfileServiceImplTest {

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
    
    // Tip! RED->GREEN->Refactoring

    // given : 무언가가 주어졌을 때,

    // when : 이 상황에

    // then : 이 결과가 나와야한다.
    // assertThat("결과값").isEqualTo("예상결과값");
    // assertTrue() assertEquals()

    // get profileInfo 
    @Test
    ArrayList<List> profile(){

        Long userId = 2L;
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
        System.out.println(profile);

        return profile;
    }



    // update awd
    @Test
    void updateAwd(){
        Long userId = 2L;
        User user = userRepository.findById(userId).get();
        AwardsCareer careerEntity = AwardsCareer.builder()
            .awardsCareerId(1L)
            .compName("careerDto.getCompName()")
            .awdName("careerDto.getAwdName()")
            .issuedAwd("careerDto.getIssedAwd()")
            //.getAwdDate("getAwdDate")
            .careerUser(user)
            .build();

        awdRepository.save(careerEntity);
    }

    // update work
    @Test
    void updateWork(){
        Long userId = 2L;
        User user = userRepository.findById(userId).get();
        WorkCareer workEntity = WorkCareer.builder()
            .workPlaceId(1L)
            .compName("workDto.getCompName()")
            .location("workDto.getLocation()")
            .jobPosition("workDto.getJobPosition()")
            .period("workDto.getPeriod()")
            .workPlaceUser(user)
            .build();

        workRepository.save(workEntity);
    }

    // update degree
    @Test
    void updateDegree(){
        Long userId = 2L;
        User user = userRepository.findById(userId).get();
        Degree degreeEntity = Degree.builder()
            .degreeId(1L)
            .education("degreeDto.getEducation()")
            .major("degreeDto.getMajor()")
            //.graduation("degreeDto.getGraduation()")
            .degreeUser(user)
            .build();

            degreeRepository.save(degreeEntity);
    }

    // update cert
    @Test
    void updateCert(){
        Long userId = 2L;
        User user = userRepository.findById(userId).get();
        Certification certEntity = Certification.builder()
            .certificationId(1L)
            .certName("certDto.getCertName()")
            //.getCertDate("certDto.getGetCertDate()")
            .issuedCert("certDto.getIssuedCert()")
            .certificationUser(user)
            .build();

            certRepository.save(certEntity);
    }


}
