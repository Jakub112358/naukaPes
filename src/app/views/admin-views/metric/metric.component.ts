import {Component} from '@angular/core';
import {MetricService} from "../../../service/metric.service";
import {Metric} from "../../../model/response/metric";

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss']
})
export class MetricComponent {
  metrics: Metric[];


  constructor(private metricService: MetricService) {
  }

  ngOnInit() {
    this.metrics = [];
    this.loadMetric();

  }

  private loadMetric() {
    this.metricService.get().subscribe(data => {
      this.metrics = data;

    })
  }
}
