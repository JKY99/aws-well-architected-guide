import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps4Bp06Page() {
  return (
    <article className="doc-content">
      <h1>OPS04-BP06 — 강건한 원격 분석 시스템 설계</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        원격 분석 시스템 자체가 워크로드의 가용성에 영향을 미치지 않도록 강건하게 설계합니다.
        모니터링 시스템이 장애나 부하 상황에서도 정상 동작하여 정확한 상태를 보고해야 합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        원격 분석 수집 실패가 워크로드 성능에 영향을 주지 않습니다.
        워크로드에 장애가 발생한 상황에서도 원격 분석 데이터가 정상 수집됩니다.
        모니터링 데이터의 유실 없이 안정적으로 수집됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>로그 전송 실패 시 애플리케이션이 중단되도록 설계하는 경우</li>
        <li>모니터링 에이전트가 과도한 CPU나 메모리를 사용하여 워크로드에 영향을 주는 경우</li>
        <li>모니터링 인프라가 모니터링하는 워크로드와 같은 장애 도메인에 있는 경우</li>
        <li>부하가 증가할 때 원격 분석 데이터 유실이 발생하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>장애 시에도 신뢰할 수 있는 모니터링 데이터 확보</li>
        <li>원격 분석 시스템이 워크로드 성능에 미치는 영향 최소화</li>
        <li>모니터링 데이터 유실로 인한 분석 오류 방지</li>
        <li>모니터링 신뢰성 향상으로 운영팀 의사결정 품질 향상</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>로그/지표 전송을 비동기적으로 처리하여 워크로드 성능에 영향을 주지 않도록 합니다.</li>
        <li>원격 분석 에이전트에 리소스 제한을 설정합니다.</li>
        <li>데이터 유실 방지를 위해 로컬 버퍼링과 재시도 로직을 구현합니다.</li>
        <li>모니터링 인프라를 워크로드와 다른 계정 또는 리전에 구성합니다.</li>
        <li>원격 분석 파이프라인 자체도 모니터링하여 데이터 수집 상태를 확인합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch Agent — 경량 지표 수집 에이전트</li>
        <li>AWS FireLens — 컨테이너 로그 라우팅 및 버퍼링</li>
        <li>Amazon Kinesis Data Firehose — 대용량 원격 분석 데이터 안정적 전송</li>
        <li>AWS Distro for OpenTelemetry Collector — 강건한 원격 분석 수집 파이프라인</li>
      </ul>

      <PageNav />
    </article>
  );
}
