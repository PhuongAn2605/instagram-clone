package fit.hanu.instagramcloningbackend.controller;

import fit.hanu.instagramcloningbackend.Entity.User;
import fit.hanu.instagramcloningbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("")
    private User submitUser(@RequestBody User users) {
        return userService.submitMetaDataOfUser(users);
    }



    @GetMapping("/{userid}")
    private User getUserDetails(@PathVariable("userid") String userId) {
        return userService.displayUserMetaData(userId);
    }
}