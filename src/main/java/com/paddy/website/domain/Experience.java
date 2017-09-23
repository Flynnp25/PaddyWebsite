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
    String startDate;
    String endDate;
    ArrayList<String> about;
    ArrayList<String> keyProjects;
    String techUsed;
    String url;

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

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getUrl(){
        return this.url;
    }

    public void setUrl(String url){
        this.url = url;
    }
    
}
