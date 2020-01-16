import {
  Component,
  ViewChild,
  ElementRef,
  AfterContentInit
} from "@angular/core";
import { OnInit } from "@angular/core";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker
} from "@ionic-native/google-maps";

declare var google;

// import { Platform, NavController } from 'ionic-angular';

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page implements OnInit, AfterContentInit {
  // @ViewChild("map", { static: false }) element;
  map;
  @ViewChild('myMap', { static: false }) mapElement;

  constructor(
    public googleMaps: GoogleMaps // public plt: Platform, // public nav: NavController
  ) { }

  public ngOnInit(): void {
    // this.initMap();
  }

  ngAfterContentInit(): void {
    this.map = new google.maps.Map(this.mapElement.nativeElement.value, {
      center: { lat: 33.6396965, lng: -84.4304574 },
      zoom: 18
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  // ngAfterViewInit() {
  //   // this.plt.ready().then(() => {
  //   this.initMap();
  //   // });
  // }

  // initMap() {
  //   // let map: GoogleMap = this.googleMaps.create(this.element.nativeElement);
  //   let map: GoogleMap = this.googleMaps.create(this.mapElement.nativeElement);

  //   map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
  //     let coordinates: LatLng = new LatLng(33.6396965, -84.4304574);

  //     let position = {
  //       target: coordinates,
  //       zoom: 17
  //     };

  //     map.animateCamera(position);

  //     let markerOptions: MarkerOptions = {
  //       position: coordinates,
  //       // icon: "assets/images/icons8-Marker-64.png",
  //       title: "First Marker"
  //     };

  //     const marker = map.addMarker(markerOptions).then((marker: Marker) => {
  //       marker.showInfoWindow();
  //     });
  //   });
  // }
}
