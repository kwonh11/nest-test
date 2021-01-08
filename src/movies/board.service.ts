import { Injectable } from '@nestjs/common';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  private boardlist: Board[] = [
    {id: 0, title: "전달사항1", content: "전달사항 내용1"},
    {id: 1, title: "전달사항2", content: "전달사항 내용2"},
    {id: 2, title: "전달사항3", content: "전달사항 내용3"},
    {id: 3, title: "전달사항4", content: "전달사항 내용4"},
    {id: 4, title: "전달사항5", content: "전달사항 내용5"},
    {id: 5, title: "전달사항6", content: "전달사항 내용6"},
  ];

  getAll(): Board[] {
    return this.boardlist;
  }
}
