package com.cookub.backend.model;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
public class ChatMessage {
    @Id
    @GeneratedValue
    @Column(name = "message_id")
    private Long messageId;
    private String message;
    @CreationTimestamp
    private LocalDateTime writtenDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "room_id")
    private ChatRoom chatRoom;
}
