import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel11Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL11-BP04 — 복구 중에는 컨트롤 플레인이 아닌 데이터 플레인 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 장애 복구 시 AWS 컨트롤 플레인 장애가 복구를 방해할 수 있습니다.</p>
      </div>
      <p>
        AWS의 컨트롤 플레인(AWS API, 콘솔)과 데이터 플레인(실제 서비스 처리)은 별도로
        운영됩니다. 장애 복구 중에는 AWS API 호출이 필요한 조치보다 기존에 배포된
        데이터 플레인 리소스를 활용하는 것이 더 신뢰성이 높습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        복구 프로세스가 AWS API(컨트롤 플레인) 가용성에 최소한으로 의존하며,
        기존 배포된 리소스(데이터 플레인)를 활용하여 복구가 이루어집니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>장애 복구 시 새로운 EC2 인스턴스를 프로비저닝하는 절차에 의존하는 경우 (API 의존)</li>
        <li>복구 자동화 스크립트가 AWS CLI/API 호출에 크게 의존하는 경우</li>
        <li>미리 프로비저닝된 스탠바이 인스턴스 없이 장애 발생 후 리소스를 생성하는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>AWS 컨트롤 플레인 지연이나 장애가 복구에 영향을 주지 않음</li>
        <li>더 빠르고 신뢰성 있는 복구</li>
        <li>지역적 이벤트 중에도 복구 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>DR 환경을 미리 프로비저닝(웜 스탠바이)하여 장애 시 즉시 트래픽을 전환할 수 있도록 합니다.</li>
        <li>Amazon Route 53 장애 조치를 사전 구성하여 DNS 전환만으로 복구가 이루어지도록 합니다.</li>
        <li>Auto Scaling 그룹의 원하는 용량(Desired Capacity)을 미리 설정하여 인스턴스가 이미 실행 중이도록 유지합니다.</li>
        <li>복구 시 새 리소스 생성보다 기존 스탠바이 리소스 활성화를 우선합니다.</li>
        <li>CloudFormation 또는 CDK로 인프라를 코드화하되, 실제 복구는 미리 배포된 리소스를 활용합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon Route 53 — 사전 구성된 DNS 장애 조치</li>
        <li>Amazon EC2 Auto Scaling — 미리 배포된 인스턴스 풀 유지</li>
        <li>AWS Elastic Load Balancing — 기존 인스턴스로 트래픽 전환</li>
        <li>Amazon Aurora Global Database — 사전 복제된 리전 간 데이터베이스</li>
      </ul>
      <PageNav />
    </article>
  );
}
