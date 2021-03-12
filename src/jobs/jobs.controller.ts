import { Controller, Delete, Get, Param, Post, Put, Body } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './interfaces/job.interface';
import { JobDTO } from './dtos/job.dto';

@Controller('jobs')
export class JobsController {
    constructor(private readonly jobsService: JobsService) {}
    @Get(':id')
    find(@Param('id') id): Promise<Job> {
        return this.jobsService.find(id);
    }

    @Post()
    create(@Body() job: JobDTO): Promise<Job> {
        return this.jobsService.create(job);
    }

    @Put(':id')
    update(@Param('id') id, @Body() job: JobDTO): Promise<Job> {
        return this.jobsService.update(id, job)
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Job> {
        return this.jobsService.delete(id)
    }

}
