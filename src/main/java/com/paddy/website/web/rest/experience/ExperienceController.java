package com.paddy.website.web.rest.experience;

import com.codahale.metrics.annotation.Timed;
import com.paddy.website.domain.Experience;
import com.paddy.website.service.ExperienceService;
import com.paddy.website.service.dto.UserDTO;
import com.paddy.website.web.rest.AccountResource;
import com.paddy.website.web.rest.util.PaginationUtil;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ExperienceController {

    private final Logger log = LoggerFactory.getLogger(ExperienceController.class);

    @Autowired
    private ExperienceService experienceService;

    @GetMapping("/experience")
    public ResponseEntity<List<Experience>> getAllUsers() {
        final List<Experience> experienceList = experienceService.getExperience();
        return new ResponseEntity<>(experienceList, HttpStatus.OK);
    }

}
