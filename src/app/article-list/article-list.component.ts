import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ARTICLES } from '../mock-articles';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  heading = 'Articles';

  constructor(
    private articleService: ArticleService,
    private title: Title,
    private sharedService: SharedServiceService
  ) {}

  ngOnInit(): void {
    this.title.setTitle(`${this.heading} ${this.sharedService.blogTitle}`);
    this.getArticles();
  }

  getArticles(): void {
    this.articleService
      .getArticles()
      .subscribe((articles) => (this.articles = articles));
  }
}
