import {
  Controller,
  Get,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  getAll(): Board[] {
    return this.boardService.getAll();
  }
}
