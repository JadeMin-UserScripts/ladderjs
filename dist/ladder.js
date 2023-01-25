// src/index.ts
globalThis.LadderJS = class {
  listeners = {
    startHead: [],
    endHead: [],
    startBody: [],
    endBody: []
  };
  once(eventName, callback) {
    switch (eventName) {
      case "startHead" /* head */: {
        this.listeners.startHead.push(callback);
        break;
      }
      case "startBody" /* body */: {
        this.listeners.startBody.push(callback);
        break;
      }
      case "endBody" /* body */: {
        this.listeners.endBody.push(callback);
        break;
      }
      default: {
        console.warn(`Ignoring invalid event: "${eventName}"`);
        break;
      }
    }
  }
  setup() {
    let headMO = new MutationObserver((event) => {
      document.head && (this.listeners.startHead.forEach((c) => c(event)), headMO.disconnect());
    }), bodyMO = new MutationObserver((event) => {
      document.body && (document.addEventListener("DOMContentLoaded", (_event) => this.listeners.endBody.forEach((c) => c(_event))), this.listeners.startBody.forEach((c) => c(event)), bodyMO.disconnect());
    });
    headMO.observe(document, {
      childList: !0,
      subtree: !0
    }), bodyMO.observe(document, {
      childList: !0,
      subtree: !0
    });
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge1xyXG5cdExpc3RlbmVycywgT25jZUNhbGxiYWNrLFxyXG5cdEV2ZW50cywgU3RhcnRFdmVudHMsIEVuZEV2ZW50cyxcclxufSBmcm9tIFwiLi90eXBlcy5qc1wiO1xyXG5cclxuXHJcbmdsb2JhbFRoaXMuTGFkZGVySlMgPSBjbGFzcyB7XHJcblx0cHJpdmF0ZSBsaXN0ZW5lcnM6IExpc3RlbmVycyA9IHtcclxuXHRcdHN0YXJ0SGVhZDogW10sXHJcblx0XHRlbmRIZWFkOiBbXSxcclxuXHRcdHN0YXJ0Qm9keTogW10sXHJcblx0XHRlbmRCb2R5OiBbXVxyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBvbmNlKGV2ZW50TmFtZTogRXZlbnRzLCBjYWxsYmFjazogT25jZUNhbGxiYWNrKTogdm9pZCB7XHJcblx0XHRzd2l0Y2goZXZlbnROYW1lKSB7XHJcblx0XHRcdGNhc2UgU3RhcnRFdmVudHMuaGVhZDoge1xyXG5cdFx0XHRcdHRoaXMubGlzdGVuZXJzLnN0YXJ0SGVhZC5wdXNoKGNhbGxiYWNrKTsgYnJlYWs7XHJcblx0XHRcdH07XHJcblx0XHRcdC8qY2FzZSBFbmRFdmVudHMuaGVhZDoge1xyXG5cdFx0XHRcdHRoaXMubGlzdGVuZXJzLmVuZEhlYWQucHVzaChjYWxsYmFjayk7IGJyZWFrO1xyXG5cdFx0XHR9OyovXHJcblx0XHRcdGNhc2UgU3RhcnRFdmVudHMuYm9keToge1xyXG5cdFx0XHRcdHRoaXMubGlzdGVuZXJzLnN0YXJ0Qm9keS5wdXNoKGNhbGxiYWNrKTsgYnJlYWs7XHJcblx0XHRcdH07XHJcblx0XHRcdGNhc2UgRW5kRXZlbnRzLmJvZHk6IHtcclxuXHRcdFx0XHR0aGlzLmxpc3RlbmVycy5lbmRCb2R5LnB1c2goY2FsbGJhY2spOyBicmVhaztcclxuXHRcdFx0fTtcclxuXHRcdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRcdGNvbnNvbGUud2FybihgSWdub3JpbmcgaW52YWxpZCBldmVudDogXCIke2V2ZW50TmFtZX1cImApOyBicmVhaztcclxuXHRcdFx0fTtcclxuXHRcdH07XHJcblx0fTtcclxuXHRwdWJsaWMgc2V0dXAoKTogdm9pZCB7XHJcblx0XHRjb25zdCBoZWFkTU86IE11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoZXZlbnQ6IE11dGF0aW9uUmVjb3JkW10pID0+IHtcclxuXHRcdFx0aWYoZG9jdW1lbnQuaGVhZCkge1xyXG5cdFx0XHRcdC8vdGhpcy4jbGlzdGVuZXJzLm9uY2UuZW5kSGVhZC5mb3JFYWNoKGM9PiBjKGV2ZW50KSk7XHJcblx0XHRcdFx0dGhpcy5saXN0ZW5lcnMuc3RhcnRIZWFkLmZvckVhY2goYz0+IGMoZXZlbnQpKTtcclxuXHRcdFx0XHRoZWFkTU8uZGlzY29ubmVjdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IGJvZHlNTzogTXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChldmVudDogTXV0YXRpb25SZWNvcmRbXSkgPT4ge1xyXG5cdFx0XHRpZihkb2N1bWVudC5ib2R5KSB7XHJcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgX2V2ZW50PT4gdGhpcy5saXN0ZW5lcnMuZW5kQm9keS5mb3JFYWNoKGM9PiBjKF9ldmVudCkpKTtcclxuXHJcblx0XHRcdFx0dGhpcy5saXN0ZW5lcnMuc3RhcnRCb2R5LmZvckVhY2goYz0+IGMoZXZlbnQpKTtcclxuXHRcdFx0XHRib2R5TU8uZGlzY29ubmVjdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGhlYWRNTy5vYnNlcnZlKGRvY3VtZW50LCB7XHJcblx0XHRcdGNoaWxkTGlzdDogdHJ1ZSxcclxuXHRcdFx0c3VidHJlZTogdHJ1ZVxyXG5cdFx0fSk7XHJcblx0XHRib2R5TU8ub2JzZXJ2ZShkb2N1bWVudCwge1xyXG5cdFx0XHRjaGlsZExpc3Q6IHRydWUsXHJcblx0XHRcdHN1YnRyZWU6IHRydWVcclxuXHRcdH0pO1xyXG5cdH07XHJcbn07Il0sCiAgIm1hcHBpbmdzIjogIjtBQU1BLFdBQVcsV0FBVyxNQUFNO0FBQUEsRUFDbkIsWUFBdUI7QUFBQSxJQUM5QixXQUFXLENBQUM7QUFBQSxJQUNaLFNBQVMsQ0FBQztBQUFBLElBQ1YsV0FBVyxDQUFDO0FBQUEsSUFDWixTQUFTLENBQUM7QUFBQSxFQUNYO0FBQUEsRUFFTyxLQUFLLFdBQW1CLFVBQThCO0FBQzVELFlBQU8sV0FBVztBQUFBLE1BQ2pCLDZCQUF1QjtBQUN0QixhQUFLLFVBQVUsVUFBVSxLQUFLLFFBQVE7QUFBRztBQUFBLE1BQzFDO0FBQUEsTUFJQSw2QkFBdUI7QUFDdEIsYUFBSyxVQUFVLFVBQVUsS0FBSyxRQUFRO0FBQUc7QUFBQSxNQUMxQztBQUFBLE1BQ0EsMkJBQXFCO0FBQ3BCLGFBQUssVUFBVSxRQUFRLEtBQUssUUFBUTtBQUFHO0FBQUEsTUFDeEM7QUFBQSxNQUNBLFNBQVM7QUFDUixnQkFBUSxLQUFLLDRCQUE0QixZQUFZO0FBQUc7QUFBQSxNQUN6RDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDTyxRQUFjO0FBQ3BCLFFBQU0sU0FBMkIsSUFBSSxpQkFBaUIsQ0FBQyxVQUE0QjtBQUNsRixNQUFHLFNBQVMsU0FFWCxLQUFLLFVBQVUsVUFBVSxRQUFRLE9BQUksRUFBRSxLQUFLLENBQUMsR0FDN0MsT0FBTyxXQUFXO0FBQUEsSUFFcEIsQ0FBQyxHQUNLLFNBQTJCLElBQUksaUJBQWlCLENBQUMsVUFBNEI7QUFDbEYsTUFBRyxTQUFTLFNBQ1gsU0FBUyxpQkFBaUIsb0JBQW9CLFlBQVMsS0FBSyxVQUFVLFFBQVEsUUFBUSxPQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FFcEcsS0FBSyxVQUFVLFVBQVUsUUFBUSxPQUFJLEVBQUUsS0FBSyxDQUFDLEdBQzdDLE9BQU8sV0FBVztBQUFBLElBRXBCLENBQUM7QUFDRCxXQUFPLFFBQVEsVUFBVTtBQUFBLE1BQ3hCLFdBQVc7QUFBQSxNQUNYLFNBQVM7QUFBQSxJQUNWLENBQUMsR0FDRCxPQUFPLFFBQVEsVUFBVTtBQUFBLE1BQ3hCLFdBQVc7QUFBQSxNQUNYLFNBQVM7QUFBQSxJQUNWLENBQUM7QUFBQSxFQUNGO0FBQ0Q7IiwKICAibmFtZXMiOiBbXQp9Cg==
