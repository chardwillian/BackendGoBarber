import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import User from '@modules/users/infra/typeorm/entities/User';

@Entity('appointments')
class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    provider_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'provider_id' })
    provider: User;

    @Column() // nessa linha a coluna do banco de dados mesmo
    user_id: string;

    @ManyToOne(() => User) // aqui é só algo da programação no javascript, vários agendamentos pra um usuário.
    @JoinColumn({ name: 'user_id' }) // demonstrando qual coluna nessa tabela faz o relacionamento que é a user_id na linha 25
    user: User;

    @Column('timestamp with time zone')
    date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Appointment;
