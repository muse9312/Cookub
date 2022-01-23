package com.cookub.backend.dto;

import com.cookub.backend.entity.Recipe;
import com.cookub.backend.entity.User;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChatRoomDto {

    private Long roomId;

    private Long requesterId;

    private Long respondentId;

    private Long recipeId;
}
