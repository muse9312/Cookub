package com.cookub.backend.dto;

import com.cookub.backend.entity.ChatRoom;
import com.cookub.backend.entity.User;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChatMessageDto {

    private Long messageId;
    private String message;
    @CreationTimestamp
    private LocalDateTime writtenDate;
    private User user;

    private Long roomId;
}