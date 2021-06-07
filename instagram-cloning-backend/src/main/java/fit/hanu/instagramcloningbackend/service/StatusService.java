package fit.hanu.instagramcloningbackend.service;

import fit.hanu.instagramcloningbackend.Entity.Status;
import fit.hanu.instagramcloningbackend.Entity.User;
import fit.hanu.instagramcloningbackend.repository.StatusRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StatusService {

    @Autowired
    StatusRepo statusRepo;

    @Autowired
    UserService userService;

    public Status submitDataIntoDB(Status status) {
        return statusRepo.save(status);
    }

    public ArrayList<Status> retrieveStatus(){

        ArrayList<Status> statusList=statusRepo.findAll();

        for(int i=0;i<statusList.size();i++) {
            Status statusItem=statusList.get(i);
            statusItem.setUserName(userService.displayUserMetaData(statusItem.getUserId()).getUserName());
        }

        return statusList;
    }
}
