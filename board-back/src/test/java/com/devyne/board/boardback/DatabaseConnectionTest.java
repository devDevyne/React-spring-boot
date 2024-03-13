package com.devyne.board.boardback;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@SpringBootTest
@Transactional
public class DatabaseConnectionTest {

    @PersistenceContext
    private EntityManager entityManager;

    @Test
    public void testDatabaseConnection() {
        assertNotNull(entityManager);
        
    }
}
