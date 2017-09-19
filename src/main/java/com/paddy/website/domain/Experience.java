package com.paddy.website.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.ArrayList;

@Document(collection = "experience")
public class Experience extends AbstractAuditingEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    String position;
    String companyName;
    String dates;
    ArrayList<String> about;
    ArrayList<String> keyProjects;
    String techUsed;

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getDates() {
        return dates;
    }

    public void setDates(String dates) {
        this.dates = dates;
    }

    public ArrayList<String> getAbout() {
        return about;
    }

    public void setAbout(ArrayList<String> about) {
        this.about = about;
    }

    public ArrayList<String> getKeyProjects() {
        return keyProjects;
    }

    public void setKeyProjects(ArrayList<String> keyProjects) {
        this.keyProjects = keyProjects;
    }

    public String getTechUsed() {
        return techUsed;
    }

    public void setTechUsed(String techUsed) {
        this.techUsed = techUsed;
    }
}
