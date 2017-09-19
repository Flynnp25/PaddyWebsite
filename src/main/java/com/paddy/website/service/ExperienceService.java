package com.paddy.website.service;

import com.paddy.website.config.Constants;
import com.paddy.website.domain.Experience;
import com.paddy.website.domain.User;
import com.paddy.website.repository.ExperienceRepository;
import com.paddy.website.repository.UserRepository;
import com.paddy.website.service.dto.UserDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExperienceService {

    private final Logger log = LoggerFactory.getLogger(ExperienceService.class);

    @Autowired
    private ExperienceRepository experienceRepository;

    public List<Experience> getExperience() {
        log.debug("getExperience - Service");
        return experienceRepository.findAll();
    }

}
