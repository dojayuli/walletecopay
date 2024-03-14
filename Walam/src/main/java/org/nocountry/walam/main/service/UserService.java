package org.nocountry.walam.main.service;

import org.nocountry.walam.main.model.dto.UpdateUserDTO;
import org.nocountry.walam.main.model.dto.UserDTO;
import org.nocountry.walam.main.model.entity.User;

import java.util.List;

public interface UserService {

    public List<UserDTO> getAllUsers() throws Exception;

    public User getByUsername(String username) throws Exception;

    public UserDTO getUserById(int id) throws Exception;

    public void updateUser(String username, UpdateUserDTO userRequest) throws Exception;

    public User findByAlias(String alias) throws Exception;

    public boolean existsByAlias(String alias);

}
