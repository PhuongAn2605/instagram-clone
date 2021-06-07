package fit.hanu.instagramcloningbackend.service;

import fit.hanu.instagramcloningbackend.Entity.User;
import fit.hanu.instagramcloningbackend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public User submitMetaDataOfUser(User user) {
        return userRepo.save(user);
    }

    public User displayUserMetaData(String userid) {
        return userRepo.findByUserId(userid);
    }
}
