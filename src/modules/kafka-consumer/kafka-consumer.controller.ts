import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class KafkaConsumerController {
  @EventPattern('example-topic')
  async listen(@Payload() message) {
    console.log(message);
  }
}
