import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarasoulDto } from './dto/create-carasoul.input';
import { UpdateCarasoulDto } from './dto/update-carasoul.input';
import { CarasoulEntity } from './entities/carasoul.entity';

@Injectable()
export class CarasoulService {
  constructor(
    @InjectRepository(CarasoulEntity)
    private readonly carasoulEntity: Repository<CarasoulEntity>,
  ) {}
  async createCarasoul(
    createCarasoulInput: CreateCarasoulDto,
  ): Promise<CarasoulEntity> {
    const carasoulInput = new CarasoulEntity();
    carasoulInput.image = createCarasoulInput.image;
    carasoulInput.description = createCarasoulInput.description;
    carasoulInput.title = createCarasoulInput.title;
    carasoulInput.quote = createCarasoulInput.qoute;

    const carasoul = await this.carasoulEntity.save(carasoulInput);
    return carasoul;
  }

  async getCarasouls() {
    const carasoul = await this.carasoulEntity.find();
    return carasoul;
  }

  async getCarasoul(id: string) {
    const carasoul = await this.carasoulEntity.findOne({ where: { id } });
    return carasoul;
  }

  async updateCarasoul(id: string, updateCarasoulInput: UpdateCarasoulDto) {
    const carasoulInput = await this.carasoulEntity.preload({
      id: id,
      ...updateCarasoulInput,
    });
    if (!carasoulInput) {
      throw new NotFoundException(
        `Carasoul image with ${id} not found on server`,
      );
    } else {
      carasoulInput.image = updateCarasoulInput.image;
      carasoulInput.description = updateCarasoulInput.description;
      carasoulInput.title = updateCarasoulInput.title;
      carasoulInput.quote = updateCarasoulInput.qoute;

      const carasoul = await this.carasoulEntity.save(carasoulInput);
      return carasoul;
    }
  }

  async deleteCarasoul(id: string) {
    const carasoul = await this.carasoulEntity.findOne({ where: { id } });

    if(!carasoul){
      throw new NotFoundException(`Carasoul imaage with ${id} not found`)
    }
    else{
      await this.carasoulEntity.remove(carasoul)
      return {
        id:id,
        image:"",
        title:"",
        description:"",
        qoute:"",
        createAt: new Date(0),
        updateAt:new Date(0)
      }
    }
  }
}
