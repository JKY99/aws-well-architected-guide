import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus2Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SUS02-BP04 — 네트워킹 요구사항에 따른 워크로드의 지리적 배치 최적화</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        네트워크 트래픽이 이동해야 하는 거리를 줄이고 워크로드를 지원하는 데 필요한 전체 네트워크
        리소스를 최소화하는 클라우드 위치와 서비스를 선택합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        워크로드를 사용자와 가까운 곳에 배치하여 최저 지연 시간을 제공하고 네트워크를 통한
        데이터 이동을 줄입니다. 환경적 영향을 줄이고 성능을 개선하면서 지속 가능성 발자국을 낮춥니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비즈니스·지속 가능성 요구사항 대신 자신의 지리적 위치를 기준으로 워크로드 리전을 선택하는 경우</li>
        <li>모든 워크로드 리소스를 하나의 지리적 위치에 통합하는 경우</li>
        <li>모든 트래픽을 기존 데이터 센터를 통해 라우팅하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>네트워크를 통한 데이터 이동 감소와 함께 최저 지연 시간 달성</li>
        <li>최적화된 네트워크 리소스 활용을 통한 환경적 영향 감소</li>
        <li>근접 배치를 통한 사용자 경험 향상</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>Amazon CloudWatch와 AWS CloudTrail을 사용하여 네트워크 활동 데이터를 수집하고 사용자가 애플리케이션과 상호 작용하는 방식을 파악합니다.</li>
        <li>지속 가능성 목표, 데이터 위치, 사용자 위치, 비용·규정 준수 제약에 따라 리전을 선택합니다.</li>
        <li>Amazon CloudFront로 정적·동적 콘텐츠를 캐싱하고 Amazon ElastiCache로 웹 애플리케이션 콘텐츠를 캐싱합니다.</li>
        <li>Lambda@Edge, CloudFront Functions로 사용자와 가까운 곳에서 코드를 실행합니다.</li>
        <li>연결 풀링을 사용하여 필요한 리소스를 줄이고 지역별 인구를 위한 분산 데이터 스토어를 활용합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudFront — 정적·동적 콘텐츠 캐싱 및 엣지 전송</li>
        <li>Amazon ElastiCache — 웹 애플리케이션용 콘텐츠 캐싱</li>
        <li>Lambda@Edge — 캐시되지 않은 객체에 대한 컴퓨팅 집약적 작업</li>
        <li>CloudFront Functions — 간단한 HTTP(s) 요청·응답 조작</li>
        <li>AWS IoT Greengrass — 연결된 디바이스를 위한 로컬 컴퓨팅 및 데이터 캐싱</li>
        <li>Amazon Route 53 — 지능형 DNS 기반 트래픽 라우팅</li>
      </ul>

      <PageNav />
    </article>
  );
}
