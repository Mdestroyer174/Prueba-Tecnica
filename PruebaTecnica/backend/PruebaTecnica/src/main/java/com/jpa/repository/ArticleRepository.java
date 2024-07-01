package com.jpa.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jpa.entities.Article;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
  
}