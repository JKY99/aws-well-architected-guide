import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus6Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SUS06-BP03 — 디바이스 팜에서 지속 가능성 테스트</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>
        실제 디바이스에서 애플리케이션의 에너지 소비를 테스트하고 최적화합니다.
        모바일 및 엣지 디바이스에서 실행되는 애플리케이션은 배터리 소모와 에너지 효율이 사용자 경험과 환경적 영향에 직접적으로 연결됩니다.
        AWS Device Farm과 같은 서비스를 활용하여 다양한 실제 디바이스에서 에너지 소비 패턴을 측정하고 개선하십시오.
      </p>
      <h2>원하는 결과</h2>
      <p>
        애플리케이션이 최종 사용자 디바이스에서 최소한의 에너지를 소비하며 실행되어
        배터리 수명을 연장하고 디바이스의 전체 탄소 발자국을 줄입니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>에뮬레이터나 시뮬레이터에서만 테스트하고 실제 디바이스의 에너지 소비를 측정하지 않는 것</li>
        <li>기능 테스트에만 집중하고 에너지 소비 프로파일링을 무시하는 것</li>
        <li>백그라운드 프로세스 및 불필요한 네트워크 호출로 인한 배터리 소모를 허용하는 것</li>
        <li>디바이스 다양성을 고려하지 않고 하나의 디바이스에서만 테스트하는 것</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>수백만 사용자 디바이스의 에너지 소비 감소로 누적 탄소 발자국 대폭 절감</li>
        <li>배터리 수명 향상으로 사용자 경험 개선 및 앱 평점 향상</li>
        <li>불필요한 네트워크 및 CPU 사용 제거로 앱 성능 전반적 개선</li>
        <li>에너지 효율 앱으로 친환경 브랜드 이미지 강화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Device Farm을 CI/CD 파이프라인에 통합하여 배포 전 에너지 소비 자동 측정</li>
        <li>Android 및 iOS의 에너지 프로파일링 도구(Android Profiler, Xcode Instruments)로 상세 분석</li>
        <li>배경 동기화 간격, 위치 서비스 사용 빈도 등 에너지 소비 주요 요인 식별 및 최적화</li>
        <li>네트워크 요청을 배치 처리하고 불필요한 폴링 대신 푸시 알림 활용</li>
        <li>에너지 소비 임계값을 정의하고 이를 초과하는 빌드는 배포 차단 정책 적용</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Device Farm — 실제 모바일 디바이스에서의 자동화 테스트 서비스</li>
        <li>AWS CodePipeline — CI/CD 파이프라인에 디바이스 테스트 통합</li>
        <li>Amazon CloudWatch — 애플리케이션 성능 및 리소스 사용 모니터링</li>
        <li>AWS X-Ray — 애플리케이션 성능 분석 및 병목점 파악</li>
        <li>AWS Mobile SDK — 에너지 효율적인 모바일 앱 개발 지원</li>
      </ul>
      <PageNav />
    </article>
  );
}
