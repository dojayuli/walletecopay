package org.nocountry.walam.main.model.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;
import org.nocountry.walam.main.model.dto.AccountDTO;
import org.nocountry.walam.main.model.entity.Account;


@Mapper
public interface AccountMapper {

    AccountMapper INSTANCE = Mappers.getMapper(AccountMapper.class);

    @Mappings({
            @Mapping(source = "id", target = "id"),
            //@Mapping(source = "user.id", target = "userId"),
            @Mapping(source = "numberAccount", target = "numberAccount"),
            @Mapping(source = "cvu", target = "cvu"),
            @Mapping(source = "balance", target = "balance"),
            // Map other attributes as needed
    })
    AccountDTO accountToAccountDTO(Account account);

    @Mappings({
            //@Mapping(source = "userId", target = "user.id"), // Ignore user when mapping from DTO to entity
            @Mapping(source = "numberAccount", target = "numberAccount"),
            @Mapping(source = "cvu", target = "cvu"),
            @Mapping(source = "balance", target = "balance"),
            // Map other attributes as needed
    })
    Account accountDTOToAccount(AccountDTO accountDTO);
}