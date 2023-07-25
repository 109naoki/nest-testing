// 必要なデコレータをインポートする
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// クラスがEntityであることを定義するデコレータ
@Entity()
export class Task {
  // 自動採番の主キーカラムであることを定義するデコレータ
  @PrimaryGeneratedColumn()
  id: number;

  // テーブルのカラムであることを定義するデコレータ
  @Column()
  name: string;

  @Column({ default: false })
  isCompleted: boolean;
}
